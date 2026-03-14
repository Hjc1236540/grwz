// 豆包API测试脚本 - 使用原始curl格式
const API_KEY = '42a8ebc6-afe0-41ef-a033-f62ac425b3c4';
const API_URL = 'https://ark.cn-beijing.volces.com/api/v3/chat/completions';

async function testDoubaoAPI() {
    try {
        console.log('Testing Doubao API with curl format...');
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + API_KEY
            },
            body: JSON.stringify({
                model: 'doubao-pro-32k-241215',
                messages: [
                    { role: 'system', content: '你是人工智能助手.' },
                    { role: 'user', content: '你好' }
                ]
            })
        });
        
        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error text:', errorText);
            throw new Error('API request failed');
        }
        
        const data = await response.json();
        console.log('Response data:', JSON.stringify(data, null, 2));
        
        if (data.choices && data.choices.length > 0) {
            console.log('AI message:', data.choices[0].message.content);
        }
        
    } catch (error) {
        console.error('Error:', error);
    }
}

testDoubaoAPI();
