import fs from 'fs';
import path from 'path';

function copyRecursiveSync(src: string, dest: string) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName),
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

copyRecursiveSync(path.resolve(__dirname, '..', 'src', 'views'), path.resolve(__dirname, '..', 'dist', 'views'));
copyRecursiveSync(path.resolve(__dirname, '..', 'src', 'locales'), path.resolve(__dirname, '..', 'dist', 'locales'));
