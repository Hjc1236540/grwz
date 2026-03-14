# 豆包API测试脚本 - PowerShell - 尝试从控制台获取的模型ID
$API_KEY = "42a8ebc6-afe0-41ef-a033-f62ac425b3c4"
$API_URL = "https://ark.cn-beijing.volces.com/api/v3/chat/completions"

$headers = @{
    "Content-Type" = "application/json"
    "Authorization" = "Bearer $API_KEY"
}

# 从控制台截图看到的模型名称
$models = @(
    "Doubao-Seed-1.8",
    "doubao-seed-1.8",
    "ep-20250311161116-7zh86",
    "ep-20250311161116",
    "doubao-seed-1-8",
    "doubao-seed-1_8",
    "Doubao_Seed_1.8",
    "doubao_seed_1.8",
    "volc-doubao-seed-1.8",
    "volc-doubao-seed",
    "doubao-seed-v1.8",
    "doubao-seed-v1",
    "seed-doubao-1.8",
    "seed-doubao"
)

foreach ($model in $models) {
    Write-Host "Testing model: $model"
    
    $body = @{
        model = $model
        messages = @(
            @{
                role = "system"
                content = "你是人工智能助手."
            },
            @{
                role = "user"
                content = "你好"
            }
        )
    } | ConvertTo-Json
    
    try {
        $response = Invoke-WebRequest -Uri $API_URL -Method POST -Headers $headers -Body $body -ContentType "application/json"
        
        Write-Host "SUCCESS: Model $model works!" -ForegroundColor Green
        Write-Host "Response status: $($response.StatusCode)"
        
        $responseData = $response.Content | ConvertFrom-Json
        
        if ($responseData.choices -and $responseData.choices.Count -gt 0) {
            Write-Host "AI message: $($responseData.choices[0].message.content)" -ForegroundColor Cyan
        }
        
        break
    } catch {
        Write-Host "FAILED: Model $model" -ForegroundColor Red
        Write-Host "---"
    }
}
