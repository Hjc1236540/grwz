# 豆包API测试脚本 - PowerShell - 测试Doubao-Seed模型
$API_KEY = "42a8ebc6-afe0-41ef-a033-f62ac425b3c4"
$API_URL = "https://ark.cn-beijing.volces.com/api/v3/chat/completions"

$headers = @{
    "Content-Type" = "application/json"
    "Authorization" = "Bearer $API_KEY"
}

$models = @(
    "Doubao-Seed-1.8",
    "doubao-seed-1.8",
    "Doubao-Seed-1.8-Pro",
    "doubao-seed-1.8-pro",
    "Doubao-Seed",
    "doubao-seed",
    "seed-1.8",
    "seed-1.8-pro"
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
        Write-Host "FAILED: Model $model - $($_.Exception.Message)" -ForegroundColor Red
        Write-Host "---"
    }
}
