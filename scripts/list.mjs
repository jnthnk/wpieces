import fs from 'fs'
import matter from 'gray-matter'

try {
  const files = fs.readdirSync('../src/snippets', 'utf-8')
  const snippets = files.map((name) => {
    const file = fs.readFileSync(`../src/snippets/${name}`, 'utf-8')
    const { content, data } = matter(file)
    return {
      ID: name.replace('.md', ''),
      date: data.date,
      tags: data.tags,
      title: data.title,
      content
    }
  })
  fs.writeFileSync('../src/contents/snippets.json', JSON.stringify(snippets), 'utf-8')
  console.log('Successfully written to file!')
} catch (err) {
  console.log("Something wen't wrong with creating the JSON file")
  console.log(err)
}
