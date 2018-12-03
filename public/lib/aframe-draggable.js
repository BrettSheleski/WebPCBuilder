(function(){

    AFRAME.registerComponent('draggable', {
        dependencies: ['position', 'rotation'],
        schema: {
            originalPosition: { type: "vec3"},
            originalRotation: { type: "vec3"},
            targets : {type : "array"}
        },
        init: function () {
            
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