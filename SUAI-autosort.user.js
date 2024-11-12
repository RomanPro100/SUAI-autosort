// ==UserScript==
// @name        SUAI-autosort
// @version     1.3
// @description Автоматически сортирует задания в ЛК ГУАП по возрастанию дедлайна
// @match       https://pro.guap.ru/inside/student/tasks/
// @icon        https://pro.guap.ru/favicon/favicon.ico
// @grant       none
// @run-at      document-start
// @author      RomanPro100
// @namespace   https://github.com/RomanPro100
// @license     GPL-3.0-or-later; https://www.gnu.org/licenses/gpl-3.0.txt
// ==/UserScript==

url = window.location.href

params = {
  "sort": "t.harddeadline&direction=asc",
  // "page": "2"
};

query = (url.includes('?') ? '&' : '?');
for (p in params) {
  if (url.match(p + "=")) {
    continue;
  }
  query += `${p}=${params[p]}&`;
}
query = query.substr(0, query.length - 1);

if (query !== "") {
  window.location.replace(url + query);
}
