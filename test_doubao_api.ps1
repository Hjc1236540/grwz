# 豆包API测试脚本 - PowerShell
$API_KEY = "42a8ebc6-afe0-41ef-a033-f62ac425b3c4"
$API_URL = "https://ark.cn-beijing.volces.com/api/v3/chat/completions"

$headers = @{
    "Content-Type" = "application/json"
    "Authorization" = "Bearer $API_KEY"
}

$body = @{
    model = "doubao-pro-32k-241215"
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

Write-Host "Testing Doubao API..."
Write-Host "URL: $API_URL"
Write-Host "Headers: $($headers | Out-String)"
Write-Host "Body: $body"

try {
    $response = Invoke-WebRequest -Uri $API_URL -Method POST -Headers $headers -Body $body -ContentType "application/json"
    
    Write-Host "Response status: $($response.StatusCode)"
    Write-Host "Response headers: $($response.Headers | Out-String)"
    
    $responseData = $response.Content | ConvertFrom-Json
    Write-Host "Response data: $($responseData | ConvertTo-Json -Depth 10)"
    
    if ($responseData.choices -and $responseData.choices.Count -gt 0) {
        Write-Host "AI message: $($responseData.choices[0].message.content)"
    }
} catch {
    Write-Host "Error: $($_.Exception.Message)"
    Write-Host "Error details: $($_.ErrorDetails.Message)"
}
