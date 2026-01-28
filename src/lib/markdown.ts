import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'guides');
const SCHEMA_DIR = path.join(process.cwd(), 'schema');

export async function loadMarkdown(filename: string): Promise<string> {
  const filePath = path.join(CONTENT_DIR, filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  return content;
}

export async function markdownToHtml(markdown: string): Promise<string> {
  // Configure marked for better formatting
  marked.setOptions({
    gfm: true,
    breaks: true,
  });

  return marked(markdown);
}

export async function loadSchema(filename: string): Promise<any[] | null> {
  try {
    const filePath = path.join(SCHEMA_DIR, filename);
    const content = fs.readFileSync(filePath, 'utf-8');

    // Extract JSON-LD scripts from the HTML
    const scriptMatches = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);

    if (!scriptMatches) return null;

    // Extract just the JSON content (without script tags) and parse
    const schemas = scriptMatches.map(match => {
      const jsonContent = match.replace(/<script type="application\/ld\+json">/, '').replace(/<\/script>/, '');
      return JSON.parse(jsonContent.trim());
    });

    return schemas;
  } catch (error) {
    console.error(`Error loading schema ${filename}:`, error);
    return null;
  }
}
