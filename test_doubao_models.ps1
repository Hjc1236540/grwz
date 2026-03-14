# 豆包API测试脚本 - PowerShell - 尝试不同模型
$API_KEY = "42a8ebc6-afe0-41ef-a033-f62ac425b3c4"
$API_URL = "https://ark.cn-beijing.volces.com/api/v3/chat/completions"

$headers = @{
    "Content-Type" = "application/json"
    "Authorization" = "Bearer $API_KEY"
}

$models = @(
    "doubao-pro-32k-241215",
    "doubao-pro-32k",
    "doubao-pro",
    "doubao",
    "doubao-1.0-pro",
    "doubao-1.0",
    "ep-20260311161116-7zh86"
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
        
        Write-Host "SUCCESS: Model $model works!"
        Write-Host "Response status: $($response.StatusCode)"
        
        $responseData = $response.Content | ConvertFrom-Json
        
        if ($responseData.choices -and $responseData.choices.Count -gt 0) {
            Write-Host "AI message: $($responseData.choices[0].message.content)"
        }
        
        break
    } catch {
        Write-Host "FAILED: Model $model - $($_.Exception.Message)"
        Write-Host "---"
    }
}
