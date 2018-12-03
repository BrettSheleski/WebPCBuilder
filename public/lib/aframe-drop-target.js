(function(){


    function DragDropPair(settings){
        var self = this;



    }


    var dragDroppers = [];


    AFRAME.registerComponent('drop-target', {
        dependencies: ['position', 'rotation'],
        schema: {
            accept: { type: 'selectorAll', default: null }
        },
        init: function () {
            var stringToLog = this.data;
            console.log(stringToLog);
    
            var p = this.el.getAttribute('position');
            var r = this.el.getAttribute('rotation');
            var d;
    
            if (this.data && this.data.accept) {
                for (var i = 0; i < this.data.accept.length; ++i) {
                    dragDroppers.push(new DragDropPair({
                        target : this,
                        dragger : this.data.accept[i]
                    }));
                }
            }
        },
        update: function () {
            // happens if something on the component changes
        },
        tick: function () {
            // gets called every frame (similar to Unity's Update() method) before rendering
        },
        tock: function () {
            // gets called every frame (similar to Unity's Update() method) after rendering
        },
        remove: function () {
    
        }
    });
})();
