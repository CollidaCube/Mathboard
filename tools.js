const TOOL_MENU_DIV = document.getElementById("tool-menu");

class Tool {
    static MOVE = new Tool("Move");
    static ERASER = new Tool("Eraser");
    static ACTIVE = null;

    constructor(label) {
        this.label = label;
        this._appendToMenu();
    }

    isActive() {
        return Tool.ACTIVE == this;
    }

    _appendToMenu() {
        let img = document.createElement('img');
        this.toolIcon = img;

        img.classList.add("tool-icon");
        img.src = `./assets/${this.label}.png`;
        img.title = `${this.label} Tool`;

        TOOL_MENU_DIV.appendChild(img);
        
        img.onclick = () => Tool.toggleActiveTool(this);
    }

    static toggleActiveTool(newTool) {
        if (newTool.isActive()) return;

        Tool.ACTIVE?.toolIcon?.classList.remove("active-tool");
        Tool.ACTIVE = newTool;
        newTool?.toolIcon.classList.add("active-tool");

        // this.enable();
    }
}
Tool.toggleActiveTool(Tool.MOVE);