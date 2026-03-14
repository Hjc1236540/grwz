// 豆包API测试脚本
const API_KEY = '42a8ebc6-afe0-41ef-a033-f62ac425b3c4';
const API_URL = 'https://ark.cn-beijing.volces.com/api/v3/chat/completions';

async function testDoubaoAPI(modelName) {
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
                ],
                temperature: 0.7,
                max_tokens: 1000,
                stream: false
            })
        });
        
        console.log(`Response status for ${modelName}:`, response.status);
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error(`Error data for ${modelName}:`, errorData);
            throw new Error(errorData.error?.message || 'API request failed');
        }
        
        const data = await response.json();
        console.log(`Response data for ${modelName}:`, data);
        console.log(`AI message for ${modelName}:`, data.choices[0].message.content);
        return data;
        
    } catch (error) {
        console.error(`Error for ${modelName}:`, error.message);
        return null;
    }
}

// 测试多个模型名称
async function testAllModels() {
    const models = [
        'doubao-pro-32k-241215',
        'doubao-pro-32k',
        'doubao-pro',
        'doubao',
        'doubao-1.0-pro',
        'doubao-1.0'
    ];
    
    for (const model of models) {
        const result = await testDoubaoAPI(model);
        if (result) {
            console.log(`SUCCESS: Model ${model} works!`);
            break;
        }
        console.log('---');
    }
}

testAllModels();
