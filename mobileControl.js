let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

const buttons = document.getElementById('mobile-controls');

buttons.addEventListener('click', (e) => {
    switch (e.target.id) {
        case 'up':
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: -1 };
            break;
        case 'down':
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: 1 };
            break;
        case 'left':
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: -1, y: 0 };
            break;
        case 'right':
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: 1, y: 0 };
            break;
    }
});

export function getMobileControlsInput() {
    lastInputDirection = inputDirection;
    return inputDirection;
}