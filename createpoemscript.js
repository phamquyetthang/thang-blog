const fs = require('fs');
const moment = require('moment');
const deburr = require('lodash.deburr');
const saved = []
function generateMDX(jsonData) {
  jsonData.forEach(item => {

    const date = moment(item.time, 'MM/DD/YYYY HH:mm').format('YYYY-MM-DD');
    const  t = saved.reduce((count, num) => {
      return count + (num === date ? 1 : 0);
    }, 0);

    const fileName = `poem/${date}_${t + 1}.mdx`;

    const mdxContent = `---
title: ${item.description.split('\n').slice(0, 1).join(' ')}
description: Lượn vượn vườn thơ - tháng ${moment(item.time, 'MM/DD/YYYY HH:mm').format('MM')}-${t+ 1} ${item.description.split('\n').slice(0, 2).join(' ').replaceAll('\n', ' ').replaceAll('  ', ' ')}
slug: luon-vuon-vuon-tho-thang-${moment(item.time, 'MM/DD/YYYY HH:mm').format('MM')}-${new Date().getTime()}
authors: ${item.author.replace('#', '').toLowerCase().includes('pqt') ? 'thang': item.author.replace('#', '')}
tags: [${item.page.replace(/ /g, '-').toLowerCase()}, ${item.author.replace('#', '')}, thang${moment(item.time, 'MM/DD/YYYY HH:mm').format('MM')}]
image: ${item.thumbnail}
---

${item.description.split('\n').slice(0, 6).join('\n').replaceAll('\n', '\\\n')}
{/* truncate */}
${item.description.split('\n').slice(6).join('\n').replaceAll('\n', '\\\n')}

[Source](${item.url})
`;

    fs.writeFileSync(fileName, mdxContent);
    saved.push(date)
    console.log(`File ${fileName} đã được tạo.`);
  });
}

// Thay đổi đường dẫn file JSON thành đúng đường dẫn của file JSON của bạn
const jsonFilePath = './json.json';

// Đọc file JSON và gọi hàm generateMDX
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Lỗi đọc file JSON: ${err}`);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    generateMDX(jsonData);
  } catch (parseError) {
    console.error(`Lỗi parse JSON: ${parseError}`);
  }
});
