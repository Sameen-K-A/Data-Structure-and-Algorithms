class graph {
    constructor() {
        this.graph = {};
    }

    insert(vertx) {
        if (!this.graph[vertx]) {
            this.graph[vertx] = new Set()
        }
    }

    insertEdges(vertex1, vertex2) {
        if (!this.graph[vertex1] || !this.graph[vertex2]) {
            return console.log("Vertex not founded");
        }
        this.graph[vertex1].add(vertex2)
        this.graph[vertex2].add(vertex1);
        return true;
    }

    print() {
        for (let vertex in this.graph) {
            console.log(`${vertex} -> ${[...this.graph[vertex]]}`);
        }
        return true;
    }

    removeEdges(vertex1, vertex2) {
        if (!this.graph[vertex1] || !this.graph[vertex2]) {
            return console.log("Vertex not founded");
        }
        this.graph[vertex1].delete(vertex2)
        this.graph[vertex2].delete(vertex1);
        return true;
    }

    removeVertex(vertex) {
        if (!this.graph[vertex]) {
            return false;
        }
        for (let connectedVertex of this.graph[vertex]) {
            this.removeEdges(connectedVertex, vertex)
        }
        delete this.graph[vertex]
        return true;
    }

    searchVertex(vertex) {
        if (this.graph[vertex]) {
            return true;
        } else {
            return false;
        }
    }

    DFS(start) {
        if (this.searchVertex(start) === false) {
            return console.log("Starting vertex not founded");
        }
        const visited = {};
        const stack = [];
        stack.push(start);
        while (stack.length != 0) {
            let currentVertex = stack.pop();
            if (!visited[currentVertex]) {
                visited[currentVertex] = true;
                console.log(currentVertex);
                for (let connectedVertex of this.graph[currentVertex]) {
                    if (!visited[connectedVertex]) {
                        stack.push(connectedVertex)
                    }
                }
            }
        }
    }

    BFS(start) {
        if (this.searchVertex(start) === false) {
            return console.log("Starting vertex not founded");
        }
        const visited = {};
        const queue = [];
        queue.push(start);
        while (queue.length != 0) {
            let currentVertex = queue.shift();
            if (!visited[currentVertex]) {
                visited[currentVertex] = true;
                console.log(currentVertex);
                for (let connectedVertex of this.graph[currentVertex]) {
                    if (!visited[connectedVertex]) {
                        queue.push(connectedVertex)
                    }
                }
            }
        }
    }
}


const a = new graph();
a.insert(10)
a.insert(7)
a.insert(15)
a.insert(4)
a.insert(8)
a.insert(14)
a.insert(18)
a.insertEdges(10, 7)
a.insertEdges(7, 4)
a.insertEdges(7, 8)
a.insertEdges(10, 15)
a.insertEdges(15 , 14)
a.insertEdges(15 , 18)