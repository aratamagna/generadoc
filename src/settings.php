<?php
return [
    'settings' => [
        'displayErrorDetails' => true, // set to false in production
        'addContentLengthheaders' => false, // Allow the web server to send the content-length headers

        // Renderer settings
        'renderer' => [
            'template_path' => __DIR__ . '/../templates/',
        ],

        // Monolog settings
        'logger' => [
            'name' => 'slim-app',
            'path' => isset($_ENV['docker']) ? 'php://stdout' : __DIR__ . '/../logs/app.log',
            'level' => \Monolog\Logger::DEBUG,
        ],
        'api' => [
          'core.generadoc' => [
            'url' => "http://core.generadoc.cl",
            'user' => "generadocapp",
            'pw' => "9m+8RvGXRx%_uV0Q",
            'pub_routes' => [
              'form' => [
                'list' => [
                  'headers' => [
                    'Accept' => 'application/json'
                  ]
                  'method' => 'get',
                  'route' => '/form',
                  'args' => []
                ],
                'create' => [
                  'headers' => [
                    'Accept' => 'application/json',
                    'Content-Type' => 'application/json'
                  ]
                  'method' => 'post',
                  'route' => '/form',
                  'args' => []
                ],
                'getById' => [
                  'headers' => [
                    'Accept' => 'application/json'
                  ]
                  'method' => 'get',
                  'route' => '/form/{id}',
                  'args' => ["id"]
                ]
              ]
              'input' => [],
              'doc' => [
                'create' => [
                  'headers' => [
                    'Accept' => 'application/json',
                    'Content-Type' => 'application/json'
                  ]
                  'method' => 'post',
                  'route' => '/doc',
                  'args' => []
                ],
              ],
              'template' => [
                'list' => [
                  'headers' => [
                    'Accept' => 'application/json'
                  ]
                  'method' => 'get',
                  'route' => '/template',
                  'args' => []
                ],
                'create' => [
                  'headers' => [
                    'Accept' => 'application/json',
                    'Content-Type' => 'application/json'
                  ]
                  'method' => 'post',
                  'route' => '/template',
                  'args' => []
                ],
                'getById' => [
                  'headers' => [
                    'Accept' => 'application/json'
                  ]
                  'method' => 'get',
                  'route' => '/template/{id}',
                  'args' => ["id"]
                ]
              ]
            ]
          ],
          'doc.generadoc' => [
            'url' => "http://doc.generadoc.cl",
            'user' => "generadocapp",
            'pw' => "Ns2j7C*A-d5MAgG",
            'pub_routes' => [
              'doc' => [
                'base64' => [
                  'headers' => [
                  ]
                  'method' => 'post',
                  'route' => '/doc/base64',
                  'args' => []
                ],
                'pdf' => [
                  'headers' => [
                    'Content-Type' => 'application/json'
                  ]
                  'method' => 'post',
                  'route' => '/doc/pdf',
                  'args' => [
                    'content' => '',
                    'name' => ''
                  ]
                ]
              ]
            ]
          ],
          'mail.adentus' => [
            'url' => "http://mail.adentus.com",
            'user' => "generadocapp",
            'pw' => "vvgJ5bqDb+H?=2Rd",
            'pub_routes' => [
              'send' => [
                'headers' => [
                  'Accept' => 'application/json',
                  'Content-Type' => 'application/json'
                ],
                'method' => 'post',
                'route' => '/',
                'args' => [
                  'address' => 'noreply@adentus.com',
                  'attachment' => [
                    'file' => 'b64encoded',
                    'name' => 'filename.pdf'
                  ],
                  'isHTML' => 'true',
                  'subject' => 'some subject',
                  'body' => 'html msg',
                  'alt' => ''
                ]
              ]
            ]
          ]
        ]
    ],
];
