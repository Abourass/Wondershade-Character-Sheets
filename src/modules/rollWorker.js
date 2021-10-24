
  on('clicked:skill', async(info) => {
    const {results, rollId} = await startRoll('&{template:custom} '
    + '{{title=@{attack_name} }} '
    + '{{@{attack_type}=[[@{attack}d20]]}} '
    + '{{totalDamage}}='
    + '{{desc=**Definition:** @{attack_description} }}')

    const [damageType] = Object.keys(results);
    const total = results[damageType].result
    const computed = total + (total * .5);

    console.log({rollWorker: { total, computed, results }});
    finishRoll(rollId, { totalDamage: computed } );
  });
