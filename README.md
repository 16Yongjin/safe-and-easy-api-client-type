# How to define safe and easy-to-use API Client type like Github Octokit

- Blog Post (Korean): [깃헙처럼 안전하고 쓰기 편한 API 타입 정의하기](https://yongj.in/development/safe-and-easy-api-types/)

## Github Octokit

- [Octokit](https://github.com/octokit/octokit.js) `request()` method autocompletes HTTP method, route, path vars, query params and response types.
- No need to import parameters/response types.

![githuboctokit](https://github.com/16Yongjin/16Yongjin.github.io/assets/22253556/c212dd8e-9e57-4992-af20-15e7ae73df33)

## In this repository

This repo shows you code example for defining an Octokit-style API client using pure Typescript.

![apitypes](https://github.com/16Yongjin/16Yongjin.github.io/assets/22253556/2b6fd654-e5e6-4435-a255-c4e645eb0817)

## How to explore the code

1. Clone this repo.
2. Check out [`entity.ts`](./entity.ts)
3. Check out [`api.ts`](./api.ts)
4. Try manipulating the code on [`main.ts`](./main.ts)

> You can test the code directly in this
> [TypeScript Playground](https://www.typescriptlang.org/play?#code/MYewdgzgLgBAhgBwJYwLw2AJwKZytgQQAUBJAHgBURiSAlEAV3wjJoD42AKASgG4AofgHohaVOImTxMIgBs4ATxgB3JFAAWMAAaIkWmCABGAK2zBY4GADMQs2SFVgA5jAhmoSS1O8TBoSLC6AMrunmBo8BAKYMAwPGhsMADe-DAwImmZWdk5uVmAyYQwALLYGiAAJvBglfRM2PA4MEhgVtiYOOUAhKkY4NAwDG6YEXDKcGrwyAB0OACODNjQnADkAOIAohTpg20QQgBcSOXLADTJPWkIeOr75zlHt8sAjABMAMyn6aKACYQwVxowABucGGSAgTRabQ63SyAF8Tj1YXxBGkMplCrRFgg+vUoAoEPUwRDWu1sF0ejtMFMjgI0pSpmA4ABbbACHpovKcrlpDGMfBNcHNEnQnr+fqU8HoUbjQLTJylFZCCWfFJZDKFACKC0wSiIIOZ4JBhMhpPJWXmbQUt1V2Su8tuTwROQgSAAXtgHQAGC5pWEwRHI9miHIYrE4mB4gkC4lQskwgZDCAAbU9AF1qeVaQndin04yWQJYWyMj5vDJ5EpVACtJgEMB9EZTOYDOEbHYHM0XG5zGExKXUH4+rBa8AQj2vJForF4qhEjaOdzF1zCgAhCpKSOEwUmkVpMWwSkjMYTEdTelYXD4ThJGCGdfWmD5j0wZbGEDqMBTcogbDLGCwpE2VRYN0RgTEIGxSBcXxLcY1NeN6RpCkhgZZlWRRL4lywzlNW1XV9SZCMYOjIVYzNXoAmzTBJXgY9hzrM8UNkMEoGvGALR1B87WfR1XDdHjPX-QCMIXUDwMgtwiKjIlSPg5CczTDMswlXNUILfhYUEEt+wkGB1jADw8RgAARbArGaNRex0yRBE3GAAFUhgiG0HlcKBME7LMn1uaAPOcQs2TsogQH6dAXPKHz3M8npDNkZ9fOitI73KK03L8pwAq00RrOkGgTLMiyPC8HKB34Oy8rCnpliVRNlmtH15Sgeqcg41KbRybjbjABgmUMNos2dfiup6vrMAGzIix9NIcAgnFbkctok1TcbJqybFoGa7JktSogkGAABrMgFswM5lifZY2HG6awyg+ahhWrNJqqmrdgOI46ruTJGs2tbrh+7JXIS-ypv-K6YBmiTn2Oh7ESAl8hHWqAIA+9qYG+z7zTw-7fvtR8Rv6kG0hdd1ht6gmclW7IIbmmQQqgJaYbWunsdve8ZD2w7gugU7Yt-GAAB8X22i6wep27aegRnQYw6rEb2Q5jn+9HUcuP6MYBiK0sS7JKayMW3FuLmoCly4mBZ-4bnVrJAai4GKbB7bDY5sgjZ5tQ4r-QXlmFy6Qf158jZNmBymwOL8HNtWVcyG30rB3XMn9w26alyanu06yYAoYiAAlQ4Jai+2swdKJHZz5Mwf6LzwZ9dCmKxMBAJkViIAB5IIthe6jlm4J1MmYjbJiQOuG6btZNm2Wqe4a0pblr+vG5WDYO4lN7jin30ER6RHK5wavZ+mefR9b9v0jl7ve7SfumsH4eF7Hjuz-Xr6Z5vw-F-HhG6fl96n7pBByj3q-Eezd7IPy-qvc+PoQ5hxrgfYByxjLrAADKbHWKfcBCtIEbw0sWbKOVM45zzrsQuOlbLEQANLYAUC3KwlBEjoHWAAD3cnAcwZB9pUJAFYTOZwgZOF9mVYiBAEAEmqJQhQZByEwGwMw7A1RwREAbvnPE4izgUHoZ9JMRAIQwHETQuhkRtAABIkj2REW0YAcA3AuzYH6ExTDgCyAYCHSRvCFC9VsLYrQqZbgUC0ctHBZCoxFEQAANTgE4xYlBpGyPkQYEw7gNE2iTFI5oMAOEKC4ZnHxMBhGiPKOI1xmcUmpl9k9Oy4TIkQH0eoiIfiMlZIoAEwRUZ7JgDCFQEgBldihHAEdDRnB7IxPwHEuAYAlAAH44j7XmtwBIQIQBHBgF1bAgI2hzJkSM8o4JOA9BmXBGAJB+BzNnAso4PQplHLSCstZY0gn1CoDQWozBWCkBXFY+omy5HbPiU2KAGi2kdJAF0-A1FelgDID0SpCxqm0JCQgaFUSaDvLcBwfgAi7LiIgAAdTUOoLOBJKBnFCUknoKSdENO4U03xJThnfPBKEmAUypE3IJrCJMlLsmBWIpiJkIA1kADlVltAAGJIFDuUAx6AW5MjUES3RVCcV4oJdgeVYBhWYA4NyqMzzsCmXMu0oq4RKppHULgEO1EJmz3GVmC2VqqgKCzK1e1YzHU9G2i6m1PR-aerdeUnl2ALTQBbggI1LBdV0ribq-VhUwgaN5fy7AQrbliolWQG0Zq4AWogLcJhLC2G6qTMsTN2blipjOI2RJtq1Z5swKwqAZBC3LAtmWitCTzC+zSK1XNzC60Fr5NgItrVW2-Kre6tmtb62NoHUW4W5bR0dsLBi4iJQyg-PQPfT2L5j4UC3csIgoC92IJQRQdYe6iAEAoAAYWzssbV9RV3qAqLqlgj6KiRp+W+7ZajSVpHJWkzlWwrG6I-eCLQJiv12KSHw2E+hmXLMfBqnJfjyEBP9VGGgeoNDTrqKBrWzh6E9AjV8uJ4GkhfogFB2SMgCKwaZTRuthFWV3JafUdYTJQ3UPbbAdAmJQCYElXws46rbm+zspieYSAOgtzALICRtSTUwH-eEQDhiUOpjwxJhgUmyR0NpfB5jyGSmZTsiGo1ES9SMalWBQN2npOyfk4kEjPz2OcZbtxi5SmmkCyU6mHotwkxNPvbk0gL6UX1EU0mBudRIrpRydGgqhqwiZWEHgjOeUVzadkBakh-ZBBWAYDEI1GBd74BoK8ugA7wTOfBE8qr4WuBzJtPucGtnFg8ZgJCrIxHYk-L0bQurdQIBsAvjAMzYRqu9fBFp9r42+gVZfUmXVpTRviXDDVkLlWhtLYHamIt-sy09C4D6aL4cwIDtG1MK7SYQChomzkubjJZCWeZGQR7w2ejcENiPMEqq1tQXoXOH0GgG7KEQ2D9Y7QQCYBWAKkAsAkAcbiiybpa9Hpwxa41CIXXMg9a2eCfrZAv0vrIJus4g3mAcFG1hzQG3MPXBw-gEbPp3uaba8Gu782KeLCTFoJeMATE09gytn0-3JJ09C1V3n-PBfXGF-tm6bhDtpGO79DQhtriXeu7dsND3OdPZe0yN7+uPtpC+zIH71ixfYEB+rEHDhwd6ShzD5YcOEdI+wCj-AaPYYYRa4jbHouB14cJ8TqrpOd2fG58N5nWQad4fp9h3VsfMis42zNjnYaFtS60DugXSQhfeJT2ka3CfJfbdz23LYsuNDy+WAdvzKvdlq8tjTrXUwbsm71+Z57BFjdhrYJ977jdfuNsVzb+ZqN7dg-VRD53sP4dNA917sk3d0d+6HH8JggfuvB426H0oT7ygk-3Ye8n5fKfF5owCCXJAaeM5t6NtPU2bNBqgO97PFeD3V4L3Lovq3x8y8ttmBedv989C89t69x9lcYBVdMgLYNcNB29O9ddbhHsLM+93tB8zdh9ZUrdx9bcp91BQdHdIcG4Xc3cl8EBkc5Fvc19fdRRN9oFShsARVjVOsg9cN98qF9Ew8htSdj1UEo8L9FgqcfR49b979k8n8Tc2c38P9o9edBDT1wC-8RdutADb9FstBlC0Ea91A68G8jtm94C1Y28fQrsO8dd7s0D9cMCrMsCh8LcR98DZoAdJ9gdiCHdZ8ndyCF93dqDPdaDV9kRfQMdN9-hgBNB0AccS898X8D810T8L1r1b1z9gDRCr8JCX9E91AH8r9n98dX8YV38TdP8QDc9L0b1VDa9-9RdNCciRDkxKjUiaiDDvEFc3CldG9YCTDVZ1dr91BkDrC+hu8wh7DXtHCcDnC8C-sCCPCshp9SD59XdF9EdAiV8fcwiN9KJD4d9cd4iijCdo8CjZD092dSis9FDlsr9S8tCpdltOjIYYCuBTtnxdVzdOBLCUCbCxs7De8HCTc2ATlEhFEXC5iuiJ9TkiCSCfCyDod-CqCaDUd6DtjvVSgGBMBwgbw5gSizhGozhEZCSmAzhmCzsyTWCwBCS8Aoizg9jU4BAgA)
