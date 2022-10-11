import { join } from "path";
import * as fs from "fs";
import { APP_DOMAIN } from "src/contants";

export const UploadFile = (file, folderPrefix = "files", fileName = "") => {
  fileName = fileName.replace(/ +/g, "-").toLocaleLowerCase();
  const prefixPath = join(...["/", folderPrefix]);
  const corePath = join(...[__dirname, "..", "..", "public", folderPrefix]);
  const fullPath = APP_DOMAIN + prefixPath;

  // remove file if that file have been existed
  if (fs.existsSync(join(corePath, fileName))) {
    fs.unlinkSync(join(corePath, fileName));
  }

  // generate folder
  if (!fs.existsSync(corePath)) {
    let newFolderPath = join(...[__dirname, "..", "..", "public"]);
    for (let folder of folderPrefix.split("/")) {
      if (folder) {
        newFolderPath = join(newFolderPath, folder);
        fs.mkdirSync(newFolderPath);
      }
    }
  }
  // write file
  fs.writeFileSync(join(corePath, fileName), file.buffer);

  return { fullPath: join(fullPath, fileName), prefixPath: join(prefixPath, fileName) };
};
