function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Scuber headquarters location
    return Math.abs(pickupLocation - hqLocation);
  }
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start); 
    const feetPerBlock = 264; 
    return blocks * feetPerBlock;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); // Calculate the distance traveled in feet
  
    if (distance <= 400) {
      return 0; // Fare is free 
    } else if (distance > 400 && distance <= 2000) {
      const fareCents = 2 * (distance - 400); //  
      return fareCents / 100; // Convert fare to dollar
    } else if (distance > 2000 && distance <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }
