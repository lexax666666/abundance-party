import { Shazam } from 'node-shazam';
import { readdir } from 'node:fs/promises';
import { resolve, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const MUSIC_DIR = resolve(__dirname, '../../apps/web/public/music');

const shazam = new Shazam();

async function identifyFile(filePath) {
  const name = basename(filePath);
  console.log(`\n🎵 Identifying: ${name}`);
  console.log('─'.repeat(40));

  try {
    const result = await shazam.recognise(filePath, 'en-US');

    if (result?.track) {
      const { title, subtitle, genres, url } = result.track;
      console.log(`  Title:  ${title}`);
      console.log(`  Artist: ${subtitle}`);
      if (genres?.primary) console.log(`  Genre:  ${genres.primary}`);
      if (url) console.log(`  URL:    ${url}`);
    } else {
      console.log('  ⚠ Could not identify this track');
    }
  } catch (err) {
    console.error(`  ✗ Error: ${err.message}`);
  }
}

async function main() {
  const args = process.argv.slice(2);

  let files;
  if (args.length > 0) {
    files = args.map(f => resolve(f));
  } else {
    const entries = await readdir(MUSIC_DIR);
    files = entries
      .filter(f => f.endsWith('.mp3'))
      .map(f => join(MUSIC_DIR, f));
  }

  if (files.length === 0) {
    console.log('No MP3 files found.');
    return;
  }

  console.log(`Found ${files.length} file(s) to identify...\n`);

  for (const file of files) {
    await identifyFile(file);
  }

  console.log('\n✓ Done');
}

main();
