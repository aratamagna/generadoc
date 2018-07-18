<?php
// Application middleware

// e.g: $app->add(new \Slim\Csrf\Guard);

class RequestMapper {

  // public function () {}

  public function get($input, $service, $location, $args) {
    $map = $input[$service];
    Unirest\Request::auth($map['user'], $map['pw']);
    $url = $map['url'];
    $route = $map['pub_routes'];
    $indexlist = explode( ',', $location);
    foreach ($indexlist as $key => $value) {
      foreach ($route as $i => $v) {
        if (strcmp($i, $value) == 0) {
          $route = $route[$i];
        }
      }
    }
    $headers = $route['headers'];
    $url = $url.$route['route'];
    foreach ($args as $key => $value) {
      $url = str_replace("{".$key."}", $value, $url);
    }
    $response = Unirest\Request::get($url, $headers, $parameters = null);
    echo $response->raw_body;
    return $response;
  }

  public function post() {}
  }
