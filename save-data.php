<?php
header('Content-Type: application/json');

// Get the raw POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    die(json_encode(['error' => 'Invalid data']));
}

// Save to players.json
try {
    file_put_contents('players.json', json_encode($data, JSON_PRETTY_PRINT));
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}