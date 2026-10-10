# Vendors the Google Fonts we use (OFL) into src/fonts with a local fonts.css: Latin + Cyrillic subsets only.
import os, re, urllib.request
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'src', 'fonts')
UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36'
url = 'https://fonts.googleapis.com/css2?family=Rubik:wght@700;800;900&family=Nunito:wght@700;800;900&display=swap'
css = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA})).read().decode()
out, n, files = [], 0, {}
for sub, block in re.findall(r'/\* ([a-z-]+) \*/\s*(@font-face \{.*?\})', css, re.S):
    if sub not in ('latin', 'cyrillic'): continue
    src = re.search(r'url\((https://[^)]+)\)', block).group(1)
    if src not in files:
        n += 1; files[src] = f'f{n:02d}.woff2'
        open(os.path.join(OUT, files[src]), 'wb').write(urllib.request.urlopen(src).read())
    out.append(block.replace(src, files[src]))
open(os.path.join(OUT, 'fonts.css'), 'w').write('\n'.join(out) + '\n')
print(n, 'files', sum(os.path.getsize(os.path.join(OUT, f)) for f in files.values()) // 1024, 'KB')
