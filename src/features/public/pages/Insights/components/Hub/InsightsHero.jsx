import React, { useEffect, useRef } from "react";

export const InsightsHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Abstract technology concept visual logic
    let animationFrameId;
    
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const nodes = [
      { x: 20, y: 30, label: "AI", vx: 0.2, vy: 0.1 },
      { x: 80, y: 20, label: "DATA", vx: -0.1, vy: 0.2 },
      { x: 50, y: 80, label: "CLOUD", vx: 0.1, vy: -0.2 },
      { x: 90, y: 70, label: "DEVOPS", vx: -0.2, vy: -0.1 }
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.beginPath();
      ctx.strokeStyle = "rgba(var(--primary), 0.2)";
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          ctx.moveTo(nodes[i].x * canvas.width / 100, nodes[i].y * canvas.height / 100);
          ctx.lineTo(nodes[j].x * canvas.width / 100, nodes[j].y * canvas.height / 100);
        }
      }
      ctx.stroke();

      // Draw nodes
      nodes.forEach(node => {
        const px = node.x * canvas.width / 100;
        const py = node.y * canvas.height / 100;
        
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(var(--primary))";
        ctx.fill();

        ctx.font = "12px monospace";
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.fillText(node.label, px + 10, py + 4);

        // Move
        node.x += node.vx;
        node.y += node.vy;

        if (node.x <= 0 || node.x >= 100) node.vx *= -1;
        if (node.y <= 0 || node.y >= 100) node.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center bg-[#050B14] overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 z-0 opacity-40">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl text-center mx-auto">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase">
              AUREXION INSIGHTS
            </span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-8 text-white">
            Engineering Ideas for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Digital Enterprise</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-10 max-w-3xl mx-auto">
            Deep technical knowledge, architectural strategies, and thought leadership around software engineering, digital transformation, and enterprise cloud modernization.
          </p>

          <a href="#featured" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 shadow-[0_0_20px_rgba(var(--primary),0.3)]">
            Explore Insights
          </a>
        </div>
      </div>
    </section>
  );
};
