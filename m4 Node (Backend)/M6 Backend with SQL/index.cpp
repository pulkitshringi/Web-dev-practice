#include <iostream>
#include <string>
#include <vector>
#include <sstream>
#include <map>
#include <queue>
#include <stack>
#include <algorithm>
using namespace std;

map<int, int> nodeIndex;

struct node {
    int cost;
    bool visited;
};

void makePairs(vector<vector<node*>>& graph, int source, int partner) {
    graph[nodeIndex[source]].push_back(graph[nodeIndex[partner]][0]);
}

void createGraph(vector<vector<node*>>& graph, string arr[], int size) {
    for (int x = 0; x < size; x++) {
        string num;
        for (int y = 0; y < arr[x].length(); y++) {
            if (arr[x][y] >= '0' && arr[x][y] <= '9') {
                num.push_back(arr[x][y]);
            } else {
                break;
            }
        }
        int costValue;
        istringstream value(num);
        value >> costValue;
        nodeIndex.insert(make_pair(costValue, x));
        graph[x].push_back(new node);
        graph[x][0]->cost = costValue;
        graph[x][0]->visited = false;
    }
}

void addConnections(vector<vector<node*>>& graph, string arr[], int size) {
    for (int x = 0; x < size; x++) {
        string num;
        int start = arr[x].find("[");
        for (int y = start + 1; y < arr[x].length(); y++) {
            if (arr[x][y] >= '0' && arr[x][y] <= '9') {
                num.push_back(arr[x][y]);
            } else {
                int valueCost;
                istringstream convert(num);
                convert >> valueCost;
                makePairs(graph, graph[x][0]->cost, valueCost);
                num.clear();
            }
        }
    }
}

void graphReset(vector<vector<node*>>& graph) {
    for (int x = 0; x < graph.size(); x++) {
        graph[x][0]->visited = false;
    }
}

int bfsSum(vector<vector<node*>> graph, vector<node*> source) {
    queue<vector<node*>> list;
    list.push(source);
    int total = 0;
    while (!list.empty()) {
        vector<node*> currentNode = list.front();
        currentNode[0]->visited = true;
        total += currentNode[0]->cost;
        list.pop();
        for (int x = 1; x < currentNode.size(); x++) {
            if (!currentNode[x]->visited) {
                list.push(graph[nodeIndex[currentNode[x]->cost]]);
            }
        }
    }
    return total;
}

void sortResult(vector<vector<int>>& list) {
    bool swap;
    do {
        swap = false;
        for (int row = 0; row < list.size() - 1; row++) {
            if (list[row][0] > list[row + 1][0]) {
                int temp1 = list[row][0];
                int temp2 = list[row][1];
                list[row][0] = list[row + 1][0];
                list[row][1] = list[row + 1][1];
                list[row + 1][0] = temp1;
                list[row + 1][1] = temp2;
                swap = true;
            }
        }
    } while (swap);
}

string CityTraffic(string strArr[], int size) {
    nodeIndex.clear();
    vector<vector<node*>> graph(size);
    createGraph(graph, strArr, size);
    addConnections(graph, strArr, size);
    string result = "";
    vector<vector<int>> resultOrder(size);
    for (int x = 0; x < graph.size(); x++) {
        graphReset(graph);
        int high = 0;
        graph[x][0]->visited = true;
        for (int y = 1; y < graph[x].size(); y++) {
            int incomingTraffic = bfsSum(graph, graph[nodeIndex[graph[x][y]->cost]]);
            if (incomingTraffic > high) {
                high = incomingTraffic;
            }
        }
        resultOrder[x].push_back(graph[x][0]->cost);
        resultOrder[x].push_back(high);
    }
    sortResult(resultOrder);
    for (int x = 0; x < resultOrder.size(); x++) {
        stringstream convert;
        convert << resultOrder[x][0];
        result += convert.str();
        result += ':';
        convert.str("");
        convert << resultOrder[x][1];
        result += convert.str();
        result += ',';
    }
    result.pop_back();
    return result;
}

int main() {
    string A[] = { "1:[5]", "4:[5]", "3:[5]", "5:[1,4,3,2]", "2:[5,15,7]", "7:[2,8]", "8:[7,38]", "15:[2]", "38:[8]" };
    string B[] = { "1:[5]", "2:[5]", "3:[5]", "4:[5]", "5:[1,2,3,4]" };
    string C[] = { "1:[5]", "2:[5,18]", "3:[5,12]", "4:[5]", "5:[1,2,3,4]", "18:[2]", "12:[3]" };

    cout << CityTraffic(A, sizeof(A) / sizeof(A[0])) << endl; // 1:82,2:53,3:80,4:79,5:70,7:46,8:38,15:68,38:45
    cout << CityTraffic(B, sizeof(B) / sizeof(B[0])) << endl; // 1:14,2:13,3:12,4:11,5:4
    cout << CityTraffic(C, sizeof(C) / sizeof(C[0])) << endl; // 1:44,2:25,3:30,4:41,5:20,12:33,18:27

    return 0;
}