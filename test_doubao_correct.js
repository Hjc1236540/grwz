// 豆包API测试脚本 - 使用正确的模型ID
const API_KEY = '42a8ebc6-afe0-41ef-a033-f62ac425b3c4';
const API_URL = 'https://ark.cn-beijing.volces.com/api/v3/chat/completions';

async function testDoubaoAPI() {
    try {
        console.log('Testing Doubao API with correct model ID...');
        console.log('Model: doubao-seed-1-8-251228');
        
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + API_KEY
            },
            body: JSON.stringify({
                model: 'doubao-seed-1-8-251228',
                messages: [
                    { role: 'system', content: '你是人工智能助手.' },
                    { role: 'user', content: '你好' }
                ]
            })
        });
        
        console.log('Response status:', response.status);
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error:', errorData);
            throw new Error(errorData.error?.message || 'API request failed');
        }
        
        const data = await response.json();
        console.log('SUCCESS!');
        console.log('Response data:', JSON.stringify(data, null, 2));
        
        if (data.choices && data.choices.length > 0) {
            console.log('AI message:', data.choices[0].message.content);
        }
        
    } catch (error) {
        console.error('Error:', error.message);
    }
}

testDoubaoAPI();
