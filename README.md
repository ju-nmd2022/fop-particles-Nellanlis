# Particle assignment for Foundations of Programming

In this assignment, you will implement **at least two new particles** based on the `Particle` class. To do this, you will `extend` the `Particle` class and create a new class for each particle, similar to the `Fire` example already implemented. Please note, a new class also means a new file.

In your new classes, you should override the `update` function, to update the position of the particle and do all necessary calculations. To draw your particle, you should override the `draw` function. If your particle has a maximum life span, like in the `Fire` example, you can override the `isDead` function, to return `true`, when a particle can be removed.

**Don't change anything on the `Particle` class.**

You can choose for yourself, if you want new particles to be created on click, like in the example, or automatic, for example 5 new particles every frame. Play around with it and try it out.

Don't forget to use the `import` statement in the sketch file, to import and create your new particles.

Be creative with your particles and how they react. Try out different things and see what happens :)

Possible additions/changes could be:

- Change x and y position and the type of movement
- Change the position based on an angle
- Change the color over time
- Change the opacity over time
- Change the form of the particle
- ...

After you are finished, please commit your solution to GitHub, post the link to your published GitHub Page on Canvas and show your solution to Eveline and/or Garrit before you leave.
