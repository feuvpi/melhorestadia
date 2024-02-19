/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Importe as bibliotecas necessárias
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Defina o caminho para o diretório onde estão os arquivos .md dos posts
const postsDirectory = path.join(process.cwd(), 'src', 'routes', 'posts');

// Função para obter os metadados de um arquivo .md específico
const getPostData = (postDirectory: string, fileName: string) => {
    const fullPath = path.join(postsDirectory, postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Retorne os metadados apenas se for um arquivo .md
    if (path.extname(fileName) === '.md') {
        return {
            fileName,
            fullPath,
            ...matterResult.data
        };
    }

    return null; // Retorna null para arquivos que não são .md
};

// Função para obter os metadados de todos os arquivos .md dos posts
const getAllPostData = () => {
    // Verifique se o diretório de posts existe
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    // Obtenha os nomes de diretórios dentro do diretório de posts
    const postDirectories = fs.readdirSync(postsDirectory);
    let allPostsData: any[] = [];

    // Iterar sobre os diretórios de posts
    postDirectories.forEach(postDirectory => {
        const directoryPath = path.join(postsDirectory, postDirectory);

        // Verifique se o caminho é de fato um diretório
        if (fs.lstatSync(directoryPath).isDirectory()) {
            // Obtenha os nomes de arquivos dentro do diretório
            const fileNames = fs.readdirSync(directoryPath);
            const postData = fileNames.map(fileName => {
                return getPostData(postDirectory, fileName);
            });
            allPostsData = [...allPostsData, ...postData.filter(data => data !== null)]; // Filtra null values
        }
    });

    // Ordene os posts por data de publicação
    console.log(allPostsData)
    return allPostsData.sort((a, b) => {
        if (a.publishedAtIso < b.publishedAtIso) {
            return 1;
        } else {
            return -1;
        }
    });
};

export async function load({ params }) {
    const postData = getAllPostData();
	return {
		posts: postData
	};
}

// Função de carregamento de servidor para a página de posts
// export const load = async () => {
//     // Obtenha os metadados de todos os posts
//     const postData = getAllPostData();
//     // Retorne os metadados para a página
//     return {
//         props: {
//             posts: postData
//         }
//     };
// };
