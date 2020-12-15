window.BENCHMARK_DATA = {
  "lastUpdate": 1608042073838,
  "repoUrl": "https://github.com/mkungla/vars",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "marko.kungla@gmail.com",
            "name": "Marko Kungla",
            "username": "mkungla"
          },
          "committer": {
            "email": "marko.kungla@gmail.com",
            "name": "Marko Kungla",
            "username": "mkungla"
          },
          "distinct": true,
          "id": "cf45c31820ce4668b9b75971b982d431580a90c4",
          "message": "run single benchmark to test bench reporting result regex",
          "timestamp": "2020-12-15T14:49:36+02:00",
          "tree_id": "325f3909392353d551ca828b13ca287903ceb2b5",
          "url": "https://github.com/mkungla/vars/commit/cf45c31820ce4668b9b75971b982d431580a90c4"
        },
        "date": 1608036623918,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkNew",
            "value": 14.6,
            "unit": "ns/op",
            "extra": "84475435 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marko.kungla@gmail.com",
            "name": "Marko Kungla",
            "username": "mkungla"
          },
          "committer": {
            "email": "marko.kungla@gmail.com",
            "name": "Marko Kungla",
            "username": "mkungla"
          },
          "distinct": true,
          "id": "b3a639d5dea27c2fadb2dcb02754fd5bb6a5354b",
          "message": "use forked github-action-benchmark",
          "timestamp": "2020-12-15T15:22:48+02:00",
          "tree_id": "4c381aa941a99cdab3dee5d31664df3f324d6d2f",
          "url": "https://github.com/mkungla/vars/commit/b3a639d5dea27c2fadb2dcb02754fd5bb6a5354b"
        },
        "date": 1608038615317,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkNew",
            "value": 12.9,
            "unit": "ns/op",
            "extra": "90006469 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marko.kungla@gmail.com",
            "name": "Marko Kungla",
            "username": "mkungla"
          },
          "committer": {
            "email": "marko.kungla@gmail.com",
            "name": "Marko Kungla",
            "username": "mkungla"
          },
          "distinct": true,
          "id": "60b7e8b9144c63b60b614a574c41602fd43e2363",
          "message": "mkungla/github-action-benchmark@v1 is updted with regex fix",
          "timestamp": "2020-12-15T16:09:42+02:00",
          "tree_id": "4fa4f5342c5fa7f32b2a6c3827827486a458c758",
          "url": "https://github.com/mkungla/vars/commit/60b7e8b9144c63b60b614a574c41602fd43e2363"
        },
        "date": 1608041461605,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkNew/string:repeat",
            "value": 13,
            "unit": "ns/op",
            "extra": "92902906 times\n2 procs"
          },
          {
            "name": "BenchmarkNew/string:unique",
            "value": 18.8,
            "unit": "ns/op",
            "extra": "84469441 times\n2 procs"
          },
          {
            "name": "BenchmarkParse/string:cached:pkg",
            "value": 83.3,
            "unit": "ns/op",
            "extra": "14190921 times\n2 procs"
          },
          {
            "name": "BenchmarkParse/string:cached:fmt",
            "value": 99.1,
            "unit": "ns/op",
            "extra": "12415477 times\n2 procs"
          },
          {
            "name": "BenchmarkParse/string:pkg",
            "value": 135,
            "unit": "ns/op",
            "extra": "8424300 times\n2 procs"
          },
          {
            "name": "BenchmarkParse/string:fmt",
            "value": 150,
            "unit": "ns/op",
            "extra": "7881615 times\n2 procs"
          },
          {
            "name": "BenchmarkParse/int:pkg",
            "value": 107,
            "unit": "ns/op",
            "extra": "11226978 times\n2 procs"
          },
          {
            "name": "BenchmarkParse/int:fmt",
            "value": 128,
            "unit": "ns/op",
            "extra": "9280372 times\n2 procs"
          },
          {
            "name": "BenchmarkBool/strconv",
            "value": 0.45,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "BenchmarkBool/variable:new",
            "value": 14.2,
            "unit": "ns/op",
            "extra": "82477270 times\n2 procs"
          },
          {
            "name": "BenchmarkBool/variable:new:typed",
            "value": 19.6,
            "unit": "ns/op",
            "extra": "61381647 times\n2 procs"
          },
          {
            "name": "BenchmarkBool/variable:parse",
            "value": 74.4,
            "unit": "ns/op",
            "extra": "16563331 times\n2 procs"
          },
          {
            "name": "BenchmarkBool/value:new",
            "value": 0.447,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marko.kungla@gmail.com",
            "name": "Marko Kungla",
            "username": "mkungla"
          },
          "committer": {
            "email": "marko.kungla@gmail.com",
            "name": "Marko Kungla",
            "username": "mkungla"
          },
          "distinct": true,
          "id": "b4daa8c0e82838b8eee2e6225c598088fe780590",
          "message": "add Contibuting/bench results to README",
          "timestamp": "2020-12-15T16:20:11+02:00",
          "tree_id": "9af3fcd7251b47cb0caf492c0580291afb30a536",
          "url": "https://github.com/mkungla/vars/commit/b4daa8c0e82838b8eee2e6225c598088fe780590"
        },
        "date": 1608042073278,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkNew/string:repeat",
            "value": 12.9,
            "unit": "ns/op",
            "extra": "93599355 times\n2 procs"
          },
          {
            "name": "BenchmarkNew/string:unique",
            "value": 14.4,
            "unit": "ns/op",
            "extra": "83450905 times\n2 procs"
          },
          {
            "name": "BenchmarkParse/string:cached:pkg",
            "value": 84,
            "unit": "ns/op",
            "extra": "14111700 times\n2 procs"
          },
          {
            "name": "BenchmarkParse/string:cached:fmt",
            "value": 96.9,
            "unit": "ns/op",
            "extra": "11872696 times\n2 procs"
          },
          {
            "name": "BenchmarkParse/string:pkg",
            "value": 134,
            "unit": "ns/op",
            "extra": "8936280 times\n2 procs"
          },
          {
            "name": "BenchmarkParse/string:fmt",
            "value": 151,
            "unit": "ns/op",
            "extra": "7842322 times\n2 procs"
          },
          {
            "name": "BenchmarkParse/int:pkg",
            "value": 107,
            "unit": "ns/op",
            "extra": "11139801 times\n2 procs"
          },
          {
            "name": "BenchmarkParse/int:fmt",
            "value": 129,
            "unit": "ns/op",
            "extra": "9182926 times\n2 procs"
          },
          {
            "name": "BenchmarkBool/strconv",
            "value": 0.447,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "BenchmarkBool/variable:new",
            "value": 14.2,
            "unit": "ns/op",
            "extra": "84408990 times\n2 procs"
          },
          {
            "name": "BenchmarkBool/variable:new:typed",
            "value": 19.4,
            "unit": "ns/op",
            "extra": "59222894 times\n2 procs"
          },
          {
            "name": "BenchmarkBool/variable:parse",
            "value": 73,
            "unit": "ns/op",
            "extra": "16489204 times\n2 procs"
          },
          {
            "name": "BenchmarkBool/value:new",
            "value": 0.451,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          }
        ]
      }
    ]
  }
}