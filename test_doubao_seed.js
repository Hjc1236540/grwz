// 豆包API测试脚本 - 测试Doubao-Seed模型
const API_KEY = '42a8ebc6-afe0-41ef-a033-f62ac425b3c4';
const API_URL = 'https://ark.cn-beijing.volces.com/api/v3/chat/completions';

const models = [
    'Doubao-Seed-1.8',
    'doubao-seed-1.8',
    'ep-20250311161116-7zh86',
    'ep-20250311161116',
    'doubao-seed-1-8',
    'doubao-seed-1_8',
    'Doubao_Seed_1.8',
    'doubao_seed_1.8',
    'volc-doubao-seed-1.8',
    'volc-doubao-seed',
    'doubao-seed-v1.8',
    'doubao-seed-v1',
    'seed-doubao-1.8',
    'seed-doubao'
];

async function testModel(modelName) {
    try {
        console.log(`Testing model: ${modelName}`);
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + API_KEY
            },
            body: JSON.stringify({
                model: modelName,
                messages: [
                    { role: 'system', content: '你是人工智能助手.' },
                    { role: 'user', content: '你好' }
                ]
            })
        });
        
        console.log(`Response status: ${response.status}`);
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error(`Error: ${errorData.error?.message}`);
            return false;
        }
        
        const data = await response.json();
        console.log(`SUCCESS: Model ${modelName} works!`);
        console.log(`AI message: ${data.choices[0].message.content}`);
        return true;
        
    } catch (error) {
        console.error(`Error for ${modelName}: ${error.message}`);
        return false;
    }
}

async function testAllModels() {
    for (const model of models) {
        const success = await testModel(model);
        if (success) {
            console.log(`Found working model: ${model}`);
            break;
        }
        console.log('---');
    }
}

testAllModels();
