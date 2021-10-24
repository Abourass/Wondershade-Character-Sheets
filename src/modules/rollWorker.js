
  on('clicked:test', async(info) => {
    const results = await startRoll("&{template:test} {{name=Test}} {{skillRole=[[1d20]]}}")
    console.log({results});
    const total = results.skillRole.result
    const computed = total * 5;
    
    finishRoll(rollId, { skillRole: computed } );
  });
