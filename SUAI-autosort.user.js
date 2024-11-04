// ==UserScript==
// @name        SUAI-autosort
// @version     1.2
// @description Автоматически сортирует задания в ЛК ГУАП по возрастанию дедалйна
// @match       https://pro.guap.ru/inside/student/tasks/
// @icon        https://pro.guap.ru/favicon/favicon.ico
// @grant       none
// @run-at      document-start
// @author      RomanPro100
// @namespace   https://github.com/RomanPro100
// @license     GPL-3.0-or-later; https://www.gnu.org/licenses/gpl-3.0.txt
// ==/UserScript==

url = window.location.href
if (url.match("sort=")) { return }

sort_query =
  (url.includes('?') ? '&' : '?')
  + "sort=t.harddeadline&direction=asc"
;

window.location.replace(url + sort_query);
