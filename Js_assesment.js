// Step 1: Create a variable to hold your NFT's
let nftCollection = [];

// Step 2: Create an object inside your mintNFT function to hold metadata for your NFTs
function mintNFT(name, description, creator, edition, dateCreated) {
    let nft = {
        name: name,
        description: description,
        creator: creator,
        edition: edition,
        dateCreated: dateCreated
    };
    nftCollection.push(nft);
}

// Step 3: Create a function to list all NFTs' metadata
function listNFTs() {
    nftCollection.forEach(function(nft) {
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Creator: " + nft.creator);
        console.log("Edition: " + nft.edition);
        console.log("Date Created: " + nft.dateCreated);
        console.log("-----------------------------");
    });
}

// Step 4: Function to get the total number of minted NFTs
function getTotalSupply() {
    return nftCollection.length;
}

// Step 5: Call the functions
mintNFT("Suraj", "God of Light", "Parth", "1 of 10", "2024-05-31");
mintNFT("Shatrughan", "Brother of Lord Ram", "Ritesh", "2 of 10", "2024-06-01");
mintNFT("Bharat", "Country in World", "Bhumika", "3 of 10", "2024-06-02");

listNFTs();
console.log("Total NFTs minted: " + getTotalSupply());
