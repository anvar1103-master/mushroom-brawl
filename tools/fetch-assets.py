# Downloads the CC0 source packs into .cache/raw (not committed). Run once before tools/build-assets.mjs.
#   Quaternius «Stylized Nature MegaKit» (itch.io, CC0) and Kenney audio packs (kenney.nl, CC0).
import http.cookiejar, json, os, re, sys, urllib.parse, urllib.request, zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, '.cache', 'raw')
os.makedirs(RAW, exist_ok=True)
jar = http.cookiejar.CookieJar()
op = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))
op.addheaders = [('User-Agent', 'Mozilla/5.0')]

def get(url, data=None):
    if data is not None: data = urllib.parse.urlencode(data).encode()
    with op.open(url, data, timeout=120) as r: return r.read()

def unzip(path, dest):
    if os.path.isdir(dest): return
    with zipfile.ZipFile(path) as z: z.extractall(dest)

def itch(user, game, want):
    """Free itch.io download: ask for a download page, then a signed file URL for the upload named `want`."""
    dest = os.path.join(RAW, game)
    if os.path.isdir(dest): return dest
    page = get(f'https://{user}.itch.io/{game}').decode('utf8', 'ignore')
    csrf = re.search(r'name="csrf_token" value="([^"]+)"', page).group(1)
    dl = json.loads(get(f'https://{user}.itch.io/{game}/download_url', {'csrf_token': csrf}))['url']
    page = get(dl).decode('utf8', 'ignore')
    csrf = re.search(r'name="csrf_token" value="([^"]+)"', page).group(1)
    ups = re.findall(r'data-upload_id="(\d+)".{0,600}?title="([^"]+)"', page, re.S)
    uid = next(u for u, n in ups if want in n)
    url = json.loads(get(f'https://{user}.itch.io/{game}/file/{uid}?source=game_download', {'csrf_token': csrf}))['url']
    zp = dest + '.zip'
    open(zp, 'wb').write(get(url)); unzip(zp, dest); os.remove(zp)
    return dest

def kenney(slug):
    dest = os.path.join(RAW, 'kenney_' + slug)
    if os.path.isdir(dest): return dest
    page = get(f'https://kenney.nl/assets/{slug}').decode('utf8', 'ignore')
    url = re.search(r'https://kenney\.nl/media/pages/assets/[^"]+\.zip', page).group(0)
    zp = dest + '.zip'
    open(zp, 'wb').write(get(url)); unzip(zp, dest); os.remove(zp)
    return dest

print(itch('quaternius', 'stylized-nature-megakit', 'Standard'))
for k in ['impact-sounds', 'interface-sounds', 'sci-fi-sounds', 'digital-audio', 'rpg-audio', 'music-jingles', 'voiceover-pack-fighter']:
    print(kenney(k))
