// Importing the webview library
import { WebView } from 'https://deno.land/x/webview/mod.ts'
// Creating an HTML page
let html = `
        <html>
            <body>
                <h1>Hello World!</h1>
            </body>
        </html>
    `
// Creating and configuring the webview
const webview = new WebView({
  title: 'Deno Webview Example',
  url: 'data:text/html,' + html,
  width: 800,
  height: 600,
  resizable: true,
  debug: true,
  frameless: false
})
// Running the webview
webview.run()
