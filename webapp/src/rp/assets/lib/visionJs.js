var visionScript = (function(){
  return {
    scrollTriggerFn: function () {
      // 우측 이미지 영역 fix
      if($(".fixed-wrap").width() > 0){
        ScrollTrigger.matchMedia({
          "(min-width : 768px)": function(){
            gsap.to(".fixed-con", {
              scrollTrigger: {
                trigger: ".fixed-con .img-con",
                //trigger: $(this),
                start:"top "+ "12.5% + 30",
                endTrigger: $(".fixed-con"),
                end:"bottom+=400 "+ "87.5% + 30",
                pin:true,
                //markers: true,
                //id: "right_fix",
                //scrub:1,
                onEnter: function(){
                  $(".fixed-con").addClass("on");
                  $(".fixed-con .txt-con").addClass("on");
                },
                onEnterBack: function(){
                  $(".fixed-con").addClass("on");
                  $(".fixed-con .txt-con").addClass("on");
                },
                onLeave: function(){
                  $(".fixed-con").removeClass("on");
                  $(".fixed-con .txt-con").removeClass("on");
                },
                onLeaveBack: function(){
                  $(".fixed-con").removeClass("on");
                  $(".fixed-con .txt-con").removeClass("on");
                }
              },
            });
            
            // 스크롤양에 따라 오른쪽 이미지 교체 모션
            $(".fixed-con .img-con .img-box .image-list").each(function(q){
              gsap.to($(this), 1, {
                scrollTrigger: {
                  trigger: $(".fixed-con .txt-con .con-list").eq(q),
                  start:"top "+ "87.5% + 30",
                  end:"bottom " + "87.5% + 30",
                  scrub: 1,
                  //markers: true,
                  onUpdate: function(self){              
                    if(q>0){
                      gsap.to($(".fixed-con .img-con .img-box .image-list").eq(q-1), 0, {top: -100*self.progress.toFixed(4)+"%", ease:Power3.easeOut});
                    }
                  }
                },
                duration: 1,
                ease: 'back',
              });
            });


            // 왼족 글씨 영역 잠깐 fixed 시키기
            $(".fixed-con .txt-con .con-list").each(function(q){
              gsap.to($(this), 1, {
                scrollTrigger: {
                  trigger: $(this).find(".info-wrap"),
                  start:"bottom "+ "87.5% + 30",
                  end:"bottom+=480 "+ "87.5% + 30",
                  pin:true,
                  //pinSpacing: false,
                  scrub: 1,
                  //markers: true,
                  //id: "left_txt_fix",
                },

              });
            });
          },
          "(max-width : 767px)": function(){
            $(".fixed-con .txt-con .con-list").each(function(q){
              gsap.set($(this),{opacity: 0, y: 80})
              gsap.to($(this),{
                opacity: 1, 
                y: 0, 
                ease: Power2.inOut,
                scrollTrigger: {
                  trigger: '.section02',
                  start: "top top"
                }
              })
            });
          }
        });
      }    
    },

  }
})();

$(window).on("load", function(){
  visionScript.scrollTriggerFn(); // 스크롤 트리거 모션
});

