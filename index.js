//   Copyright 2024 iannl
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

module.exports = async function (prompt = '', buffer = false) {
    process.stdin.resume();
    process.stdout.write(prompt);
    return new Promise(function (resolve) {
        if (!buffer) process.stdin.setEncoding('utf8');
        process.stdin.on('data', function (data) {
            process.stdin.pause();
            if(!buffer) data = data.trim()
            resolve(data);
        });
    })
}
