/**
 * Created by Administrator on 2015/12/17.
 */


(function ($) {
    $.fn.adaptAuto = function (opations) {

        //Ĭ������
        var defaults = {
            fontSize: 12
        };

        //�ϲ�Ĭ��ֵ�Ͳ�������ֵ
        var opation = $.extend(defaults, opations);

        $(this).each(function () {
            $(this).css({
                width: "100%",
                height: "100%",
                display: "block",
                overflow: "hidden",
                "font-size": opation.fontSize
            })
        });

        return $(this);//���ع�����ʽ����
    };

    $.fn.scrollY=function(opations){


    }
})(jQuery);