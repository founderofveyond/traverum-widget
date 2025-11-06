(function(){
  function openWidget(url){
    if(document.getElementById('trv-overlay')) return;
    const overlay = document.createElement('div');
    overlay.id = 'trv-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:16px;';

    const box = document.createElement('div');
    box.style.cssText = 'background:#fff;border-radius:12px;overflow:hidden;max-width:1000px;width:100%;max-height:90vh;display:flex;flex-direction:column;';

    const bar = document.createElement('div');
    bar.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-bottom:1px solid #e2e8f0;background:#f8fafc;';
    const title = document.createElement('div');
    title.textContent = 'Local Experiences';
    title.style.cssText = 'font:600 14px system-ui';
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.style.cssText = 'font:500 12px system-ui;padding:6px 10px;border-radius:6px;background:#e2e8f0;';
    closeBtn.onclick = () => document.body.removeChild(overlay);

    const frame = document.createElement('iframe');
    frame.src = url;
    frame.style.cssText = 'border:0;width:100%;height:70vh;';
    frame.setAttribute('sandbox','allow-scripts allow-forms allow-same-origin');
    frame.referrerPolicy = 'strict-origin';

    window.addEventListener('message', (ev) => {
      if(!ev || !ev.data || typeof ev.data !== 'object') return;
      if(ev.data.type === 'traverum.height'){
        frame.style.height = Math.min(ev.data.height + 40, window.innerHeight * 0.9) + 'px';
      }
    });

    bar.appendChild(title); bar.appendChild(closeBtn);
    box.appendChild(bar); box.appendChild(frame);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
  }

  window.TraverumWidget = {
    open: function(options){
      const url = (options && options.url) || 'https://app.traverum.com/widget/demo?theme=light';
      openWidget(url);
    }
  };
})();
