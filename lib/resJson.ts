import { promises as fs } from 'fs';
import path from 'path';

export async function connectJSON() {
	const filePath = path.join(process.cwd(), 'public', 'data.json');
	const jsonData = await fs.readFile(filePath, 'utf8');
	return JSON.parse(jsonData);
}