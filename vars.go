// SPDX-License-Identifier: Apache-2.0
//
// Copyright © 2023 The Happy Authors
package vars

import "time"

const (
	// Deprecated is a marker for deprecated code.
	Deprecated = true

	// DeprecatedBy is the name entity who deprecated this package.
	DeprecatedBy = "The Happy Authors"

	// NewLocation is the new location of this package.
	NewLocation = "github.com/happy-sdk/happy-go/vars"
)

// DeprecatedAt is the date when this package was deprecated.
func DeprecatedAt() time.Time {
	return time.Date(2023, time.December, 26, 19, 00, 0, 0, time.UTC)
}
