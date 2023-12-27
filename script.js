var t1 = gsap.timeline()

t1.to("#page1",{
    y:"100vh",
    scale:0.5,
    duration:0 
})
t1.to("#page1",{
    y:"0vh",
    duration:1,
    delay:1,
    stagger:0.1
})
t1.to("#page1",{
    delay:0.1,
    scale:1,
    rotate:360
})
