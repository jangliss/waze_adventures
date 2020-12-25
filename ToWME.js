javascript: (function() {
    var mURL = window.location.href;
    var mOut = null;
    if (~mURL.toLowerCase().indexOf("google.com/maps") || ~mURL.toLowerCase().indexOf("maps.google.com")) {
        var mReg = /@(-?\d{1,2}\.\d+),(-?\d{1,3}\.\d+),(\d+(\.\d+)?)z/i;
        var mRes = mReg.exec(mURL);
        if (mRes.length === 5) {
            var mZoom = Math.floor(parseInt(mRes[3])) - 12;
            mZoom = (mZoom > 10 ? 10 : mZoom);
            mOut = 'https://www.waze.com/editor/?env=usa&lon=' + mRes[2] + '&lat=' + mRes[1] + '&zoom=' + mZoom + '&mode=0';
        }
    } else if (~mURL.toLowerCase().indexOf("drivetexas")) {
        var mReg = /(\d+)\/(-?\d+\.?\d+)\/(-?\d+\.?\d+)/;
        var mRes = mReg.exec(mURL);
        if (mRes.length === 4) {
            var mZoom = Math.floor(parseInt(mRes[1])) - 11;
            mZoom = (mZoom > 11 ? 10 : mZoom);
            mOut = 'https://www.waze.com/editor/?env=usa&lon=' + mRes[3] + '&lat=' + mRes[2] + '&zoom=' + mZoom + '&mode=0';
        }
    } else if (~mURL.toLowerCase().indexOf("waze.com")) {
        var mReg = /&lon=(-?\d+\.?\d+)&lat=(-?\d+\.?\d+)&/i;         
        var mRes = mReg.exec(mURL);         
        mOut = 'https://drivetexas.org/#/15/' + mRes[2] + '/' + mRes[1] ;           
    } else if (~mURL.toLowerCase().indexOf("i35-maps.tti.tamu.edu")) {
        var mapCenter = TTI.mapGuru.map.getCenter();
        var mZoom = TTI.mapGuru.map.getZoom();
        mZoom = (mZoom < 11 ? 11 : mZoom) - 11;
        mOut = 'https://www.waze.com/editor/?env=usa&lon=' + mapCenter.longitude + '&lat=' + mapCenter.latitude + '&zoom=' + mZoom;
    }
    if (mOut !== null) {
        window.open(mOut);
    }
})();
