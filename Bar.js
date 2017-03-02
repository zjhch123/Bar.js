function Bar() {
    var __isSBBrowser = function() {
        // ...
        return false
    };
    var __mobileAndTabletcheck = function() {
        var check = false; (function(a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                check = true;
            }
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };
    var __myCreateElement = function(className) {
        var addClass = function(target, className) {
            target.classList.add(className);
            return target;
        };
        var dom = document.createElement("div");
        return addClass(dom, className);
    };
    if (!__isSBBrowser()) {
        return {
            init: function(config, callback) {

                var target = config["target"] || "";
                var lineHeight = config["lineHeight"] || "5px";
                var lineColor = config["lineColor"] || "gray";
                var lineRadius = config["lineRadius"] || "0px";
                var ballHeight = config["ballHeight"] || "10px";
                var ballWidth = config["ballWidth"] || "10px";
                var ballColor = config["ballColor"] || "white";
                var ballRadius = config["ballRadius"] || "50%";
                var tailColor = config["tailColor"] || "blue";
                var pointShow = config["point"] || "hidden";
                var pointHeight = config["pointHeight"] || "3px";
                var pointBackgroundColor = config["pointBackgroundColor"] || "white";
                var rotate = config["rotate"] || "false";
                var beforeChange = config["beforeChange"] || new Function();
                var changing = config["changing"] || new Function();
                var afterChange = config["afterChange"] || new Function();
                var control = config["control"] || "false";


                callback = callback || new Function();
                var targetDOM = document.querySelector(target);
                var myStyle = document.createElement("style");
                myStyle.innerHTML = "._bar{position:relative;overflow:hidden;width:100%}._bar ._line{border:0;transform:translateY(-50%)}._bar ._ball,._bar ._line{position:absolute;top:50%;overflow:hidden;width:100%}._bar ._ball{float:right;transform:translateX(0) translateY(-50%)}._bar ._ball ._head{position:relative;border:0}._bar ._point{position:absolute;top:50%;left:50%;border-radius:50%;transform:translateX(-50%) translateY(-50%)}";
                document.head.appendChild(myStyle);
                var bar = __myCreateElement("_bar");
                var line = __myCreateElement("_line");
                var ball = __myCreateElement("_ball");
                var head = __myCreateElement("_head");
                var tail = __myCreateElement("_tail");
                var point = __myCreateElement("_point");
                line.style.height = lineHeight;
                line.style.backgroundColor = lineColor;
                line.style.borderRadius = lineRadius;
                ball.style.height = ballHeight;
                head.style.height = ballHeight;
                head.style.width = ballWidth;
                head.style.backgroundColor = ballColor;
                head.style.borderRadius = ballRadius;
                tail.style.backgroundColor = tailColor;
                tail.style.height = lineHeight;
                bar.style.height = targetDOM.clientHeight + "px";
                if(rotate == "true") {
                    bar.style.transform = "rotate(90deg)";
                }
                

                bar.appendChild(line);
                bar.appendChild(ball);
                if (pointShow == "show") {
                    head.appendChild(point);
                    point.style.height = pointHeight;
                    point.style.width = pointHeight;
                    point.style.backgroundColor = pointBackgroundColor;
                }

                ball.appendChild(head);
                line.appendChild(tail);
                
                targetDOM.append(bar);

                var percent = 0;
                var nowPageX = 0;
                var nowPercent = 0;
                var maxPercent = (bar.clientWidth - head.clientWidth) / bar.clientWidth * 100;
                var tailMaxPercent = 100 - (100 - maxPercent) / 2;

                tail.style.transform = "translateX(" + -tailMaxPercent + "%)";

                var calcData = function(x) {
                    var moveX = x - nowPageX;
                    nowPercent += moveX * maxPercent / bar.clientWidth;
                    if (nowPercent > maxPercent) {
                        nowPercent = maxPercent;
                    }
                    if (nowPercent <= 0) {
                        nowPercent = 0;
                    }
                    percent = nowPercent / maxPercent * 100;
                };

                var move = function() {
                    ball.style.transform = "translateX("+nowPercent+"%)  translateY(-50%)";
                    tail.style.transform = "translateX(" + (-tailMaxPercent + nowPercent) + "%)";
                };

                if(control == "true") {
                    if (__mobileAndTabletcheck()) {
                        var flag = false;
                        document.addEventListener("touchstart", function(e) {
                            if (e.touches[0].target == head || e.touches[0].target == point) {
                                e.preventDefault();
                                if (rotate != "true") {
                                    nowPageX = e.touches[0].pageX;
                                } else {
                                    nowPageX = e.touches[0].pageY;
                                }
                                beforeChange(percent);
                                flag = true;
                            }
                        });
                        document.addEventListener("touchmove", function(e) {
                            if (e.touches[0].target == head || e.touches[0].target == point) {
                                e.preventDefault();
                                if (rotate != "true") {
                                    var nowX = e.touches[0].pageX;
                                } else {
                                    var nowX = e.touches[0].pageY;
                                }
                                calcData(nowX);
                                changing(percent);
                                move();
                                nowPageX = nowX;
                            }
                        });
                        document.addEventListener("touchend", function(e) {
                            if (flag) {
                                afterChange(percent);
                                flag = false;
                            }
                        })
                    } else {
                        var flag = false;
    					document.addEventListener("mousedown", function(e) {
    						if(e.toElement == ball || e.toElement == head || e.toElement == point) {
    							flag = true;
    							if(rotate != "true") {
    								nowPageX = e.pageX;
    							} else {
    								nowPageX = e.pageY;
    							}
    							beforeChange(percent);
    						}
    					});
    					document.addEventListener("mousemove", function(e) {
    						if(flag) {
    							if(rotate != "true") {
    								var nowX = e.pageX;
    							} else {
    								var nowX = e.pageY;
    							}
    							calcData(nowX);
    							changing(percent);
    							move()
    							nowPageX = nowX;
    						}
    					});
    					document.addEventListener("mouseup", function(e) {
    						if(flag) {
    							afterChange(percent);
    							flag = false;
    						}
    					});
                    }
                }

                var scrollBar = {
                    setData: function(dataPercent) {
                        nowPercent = dataPercent * maxPercent / 100;
                        percent = dataPercent;
                        move();
                        afterChange(percent);
                    },
                    getData: function() {
                        return percent;
                    }
                };
                callback(scrollBar);
                return scrollBar;
            }
        }
    }
};