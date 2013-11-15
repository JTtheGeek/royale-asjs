/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

goog.provide('org.apache.flex.utils.BinaryData');



/**
 * @constructor
 */
org.apache.flex.utils.BinaryData = function() {

  /**
   * @private
   * @type {ArrayBuffer}
   */
  this.data_ = new ArrayBuffer();

  /**
   * @private
   * @type {number}
   */
  this.position_ = 0;

};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.utils.BinaryData.prototype.FLEXJS_CLASS_INFO =
    { names: [{ name: 'BinaryData',
                qName: 'org.apache.flex.utils.BinaryData'}] };


/**
 * @expose
 * @return {Object} The platform-specific data.
 */
org.apache.flex.utils.BinaryData.prototype.get_data = function() {
  return this.data_;
};


/**
 * @expose
 * @param {number} b The byte to write.
 */
org.apache.flex.utils.BinaryData.prototype.writeByte = function(b) {
  var view;

  this.growBuffer(1);

  view = new Int8Array(this.data_, this.position_, 1);
  view[0] = b;
  this.position_++;
};


/**
 * @expose
 * @param {number} s The 16-bit integer to write.
 */
org.apache.flex.utils.BinaryData.prototype.writeShort = function(s) {
  var view;

  this.growBuffer(2);

  view = new Int16Array(this.data_, this.position_, 1);
  view[0] = s;
  this.position_ += 2;
};


/**
 * @expose
 * @param {number} num The 32-bit integer to write.
 */
org.apache.flex.utils.BinaryData.prototype.writeInt = function(num) {
  var view;

  this.growBuffer(4);

  view = new Int32Array(this.data_, this.position_, 1);
  view[0] = num;
  this.position_ += 4;
};


/**
 * @expose
 * @param {number} num The 32-bit unsigned integer to write.
 */
org.apache.flex.utils.BinaryData.prototype.writeUnsignedInt =
    function(num) {
  var view;

  this.growBuffer(4);

  view = new Uint32Array(this.data_, this.position_, 1);
  view[0] = num;
  this.position_ += 4;
};


/**
 * @expose
 * @return {number} The byte that was read.
 */
org.apache.flex.utils.BinaryData.prototype.readByte = function() {
  var view;

  view = new Int8Array(this.data_, this.position_, 1);
  this.position_++;
  return view[0];
};


/**
 * @expose
 * @return {number} The 16-bit integer that was read.
 */
org.apache.flex.utils.BinaryData.prototype.readShort = function() {
  var view;

  view = new Int16Array(this.data_, this.position_, 1);
  this.position_ += 2;
  return view[0];
};


/**
 * @expose
 * @return {number} The 32-bit integer that was read.
 */
org.apache.flex.utils.BinaryData.prototype.readInteger = function() {
  var view;

  view = new Int32Array(this.data_, this.position_, 1);
  this.position_ += 4;
  return view[0];
};


/**
 * @expose
 * @return {number} The 32-bit unsigned integer that was read.
 */
org.apache.flex.utils.BinaryData.prototype.readUnsignedInteger =
    function() {
  var view;

  view = new Uint32Array(this.data_, this.position_, 1);
  this.position_ += 4;
  return view[0];
};


/**
 * @expose
 * @return {number} The offset to write to or read from.
 */
org.apache.flex.utils.BinaryData.prototype.get_position = function() {
  return this.position_;
};


/**
 * @expose
 * @param {number} value The offset to write to or read from.
 */
org.apache.flex.utils.BinaryData.prototype.set_position = function(value) {
  this.position_ = value;
};


/**
 * @expose
 * @return {number} The offset to write to or read from.
 */
org.apache.flex.utils.BinaryData.prototype.get_length = function() {
  return this.data_.byteLength;
};


/**
 * @expose
 * @return {number} The number of bytes that can still be read.
 */
org.apache.flex.utils.BinaryData.prototype.get_bytesAvailable = function() {
  return this.data_.byteLength - this.position_;
};


/**
 * @expose
 * @param {number} extra The number of bytes to add to the buffer.
 */
org.apache.flex.utils.BinaryData.prototype.growBuffer = function(extra) {
  var newBuffer, newView, view, i, n;

  if (this.position_ >= this.data_.byteLength)
  {
    n = this.data_.byteLength;
    newBuffer = new ArrayBuffer(n + extra);
    newView = new Int8Array(newBuffer, 0, n);
    view = new Int8Array(this.data_, 0, n);
    for (i = 0; i < n; i++)
    {
      newView[i] = view[i];
    }
    this.data_ = newBuffer;
  }
};





