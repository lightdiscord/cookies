import IPFS from 'ipfs'

export const setup = () => {

    const node = new IPFS({
        repo: "ipfs/cookies-test/" + Math.random(),
        config: {
            Addresses: {
                Swarm: [
                    '/ip4/0.0.0.0/tcp/9090/ws/p2p-websocket-star'
                ]
            }
        }
    });

    node.on('error', console.error)

    node.on('ready', () => {
        node.id((err, res) => {
            if (err) {
                throw err
            }

            console.log('new state', res);

            node.addListener([Buffer.from("This is a lol-string")], (err, filesAdded) => {
                console.log('fileAdded', filesAdded);
            })
        })

    })

    console.log(node)

}

window.lol = {
    setup
}