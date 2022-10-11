// Code your solution in this file!
function distanceFromHqInBlocks(startingBlock){
    if (startingBlock > 42) {
        return startingBlock - 42;
    } 
    else if (startingBlock < 42){
        return 42 - startingBlock;
    }
}

function distanceFromHqInFeet(startingBlock){
    let blockDistance = distanceFromHqInBlocks(startingBlock);   
    return (blockDistance * 264)
}

function distanceTravelledInFeet(start, end){
    if (start > end) {
        return ((start * 264) - (end * 264));
    } 
    else if (start < end){
        return ((end * 264) - (start * 264));
    }
}

function calculatesFarePrice(start, end){
    // since I am used previously generated numbers simply use a let
    // statement to call the information from that function
    let distance = distanceTravelledInFeet(start, end);
    if (distance < 400) return (0)
    if (distance > 400 && distance < 2000) return ((distance - 400) * .02)
    if (distance > 2000 && distance < 2500) return (25)
    if (distance >= 2500) return ('cannot travel that far')
}