<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/', function (Request $request, Response $response, array $args) {
    $this->logger->info("");

    return $this->renderer->render($response, 'index.html', $args);
});

/*
$app->get('//{id}', function ($request, $response, $args) {});
$app->post('/', function ($request, $response, $args) {});
*/

$app->get('/doc/{id}', function ($request, $response, $args) {
  $docid = $args['id'];
  $rqstm = new RequestMapper();
  $result = $rqstm->get($this->api, "core.generadoc", "form,getById", $args);
  if ($result->code == 200){
    return $response->withJson($result->raw_body, $result->code);
  } else {
    return $response->withStatus($result->code);
  }
});

$app->post('/doc', function ($request, $response, $args) {
  // $response->withJson($data, 200);
});
