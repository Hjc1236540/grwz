# 豆包API测试脚本 - PowerShell - 测试所有可能的模型
$API_KEY = "42a8ebc6-afe0-41ef-a033-f62ac425b3c4"
$API_URL = "https://ark.cn-beijing.volces.com/api/v3/chat/completions"

$headers = @{
    "Content-Type" = "application/json"
    "Authorization" = "Bearer $API_KEY"
}

$models = @(
    # 1.8版本
    "doubao-1.8-pro",
    "doubao-1.8",
    "doubao-pro-1.8",
    "doubao-1.8-pro-32k",
    "doubao-1.8-32k",
    # 1.5版本
    "doubao-1.5-pro",
    "doubao-1.5",
    "doubao-pro-1.5",
    # 1.0版本
    "doubao-1.0-pro",
    "doubao-1.0",
    "doubao-pro-1.0",
    # 其他可能
    "doubao-lite",
    "doubao-lite-4k",
    "doubao-lite-32k",
    "doubao-pro-4k",
    "doubao-pro-32k",
    "doubao-pro-128k",
    "doubao-vision",
    "doubao-vision-lite",
    "doubao-vision-pro",
    "doubao-embedding",
    "doubao-character",
    # 英文名称
    "Doubao",
    "Doubao-Pro",
    "Doubao-Lite",
    # 其他格式
    "doubao_pro",
    "doubao_lite",
    "doubao-pro-latest",
    "doubao-latest"
)

$success = $false

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
        
        $success = $true
        break
    } catch {
        Write-Host "FAILED: Model $model" -ForegroundColor Red
        Write-Host "---"
    }
}

if (-not $success) {
    Write-Host "All models failed. Please check your API key permissions or contact support." -ForegroundColor Yellow
}
