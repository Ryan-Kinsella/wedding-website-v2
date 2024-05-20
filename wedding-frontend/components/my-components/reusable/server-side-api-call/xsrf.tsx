
// 'use server';

// interface CsrfToken {
//     token: string;
//     parameterName: string;
//     headerName: string;
// }

// export interface CookieAndXxsrfToken {
//     cookie: string;
//     xXsrfToken: string;
// }

// function getCookie(str: string | undefined) {
//     if (str === undefined) {
//         console.error('cookie string is undefined')
//         return '';
//     }
//     const keyValuePairs = str.split(';');

//     // Iterate through key-value pairs to find the XSRF-TOKEN
//     let xsrfToken = "";
//     for (let pair of keyValuePairs) {
//         if (pair.includes("XSRF-TOKEN=")) {
//             xsrfToken = pair.split('=')[1];
//             break;
//         }
//     }
//     return xsrfToken;
// }

// export const getXXsrfTokenAndCookie = async () => {
//     const url = process.env.NEXT_PUBLIC_BACKEND_URL + "/cookie?" + new Date().getTime(); // Date added to prevent next js server side from cacheing the result.
//     const { signal } = new AbortController(); // do not cache request, for subsequent refreshes of page.
//     return fetch(url, {
//         method: 'GET',
//         headers: {
//             // 'cache': 'no-cache',
//             'cache': 'reload',
//             'credentials': 'include', // Include cookies in the request
//             'Cache-Control': 'no-cache',
//             'Accept': '*/*',
//             'Accept-Encoding': 'gzip, deflate, br',
//             'Connection': 'keep-alive',
//         },
//         signal
//     })
//         .then(async response => {
//             if (!response.ok) {
//                 console.error('Network response was not ok');
//                 throw new Error('Network response was not ok');
//             }
//             let xXsrfToken = '';
//             const reader = response.body?.getReader();
//             if (reader) {
//                 let { done, value } = await reader.read();
//                 // while (!done) { // function returns Mono, so never hits done in this async case.
//                 const text = new TextDecoder().decode(value);
//                 const csrfToken: CsrfToken = JSON.parse(text);
//                 xXsrfToken = csrfToken.token;
//             }
//             const cookieAndXxsrfToken: CookieAndXxsrfToken = {
//                 cookie: 'XSRF-TOKEN=' + getCookie(response.headers.getSetCookie().at(0)?.toString()),
//                 xXsrfToken: xXsrfToken
//             };
//             return cookieAndXxsrfToken;
//         })
//         .catch(error => {
//             console.error('There was a problem with your fetch operation:', error);
//             const cookieAndXxsrfToken: CookieAndXxsrfToken = {
//                 cookie: '',
//                 xXsrfToken: ''
//             };
//             return cookieAndXxsrfToken;
//         });
// }
// // getXXsrfTokenAndCookie();