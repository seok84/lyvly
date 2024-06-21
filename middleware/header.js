
export default function ({req, redirect, }) {
    //console.log('[middleware-header.js] Start -----------------');
    /*if (process.server) {
        const host = req.headers.host;
        const allowHost = [
            process.env.FRONTEND
        ];

        const matchedCount = allowHost.filter(a => host.indexOf(a) === 0).length;

        //console.log("matchedCount:", matchedCount);
        if (matchedCount === 0) {
            console.log("[middleware-header.js] Host(" + host + ") is not allowed. Redirect to '/'.");
            return redirect(process.env.FRONTEND);
        } else {
            // console.log("[middleware-header.js] allow host! ", host);
        }
    }*/
}